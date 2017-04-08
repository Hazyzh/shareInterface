<template>
	<div class="app">
		<h1>Share Interface</h1>
    <el-button type="primary" size="large" @click="handleAdd" class="addbtn">添加需求</el-button>

    <el-table :data="lists" class="table" border :row-class-name="tableRowClassName">
    <el-table-column type="expand">
    <template scope="props">
      <el-form label-position="left" class="demo-table-expand" align="left">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag color="#7CCD7C">需求明细</el-tag><br>
                <div v-html="props.row.detailRequest" class="showcode"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag color="#7CCD7C">接口明细</el-tag><br>
                <div v-html="props.row.detailResponse" class="showcode"></div>
              </el-card>
            </el-col>
          </el-row>
      </el-form>
    </template>
    </el-table-column>
    <el-table-column label="日期" width="200px" header-align="center">
     <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="100px" header-align="center">
      <template scope="scope">
        <el-tag color="#00BFFF">{{ scope.row.name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="需求" prop="request" min-width="200px" header-align="center"></el-table-column>
    <el-table-column label="接口" min-width="300px" header-align="center">
      <template scope="scope">
        <p class="interface">{{ scope.row.response }}</p>
      </template>
    </el-table-column>
    <el-table-column label="状态" width="80px" header-align="center">
      <template scope="scope">
        <el-checkbox :value="scope.row.state==1" disabled></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="200px" header-align="center">
      <template scope="scope">
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <!-- dialog -->
    <el-dialog title="编辑信息" v-model="dialogFormVisible" :close-on-click-modal="false">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <!-- 名称 -->
        <el-form-item label="姓名" prop="name">
          <el-radio-group v-model="ruleForm.name">
            <el-radio  :label="ruleForm.name" checked disabled></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 需求 -->
        <el-form-item label="需求" prop="request">
          <el-input v-model="ruleForm.request"></el-input>
        </el-form-item>
        <!-- 详情 -->
        <el-form-item>
          <p align="left" class="title">需求详情</p>
          <script type="text/plain" id="myEditor1" style="width:100%;height:200px;">
          </script>
        </el-form-item>

        <!-- 接口 -->
        <el-form-item label="接口" prop="response">
          <el-input v-model="ruleForm.response"></el-input>
        </el-form-item>
        <!-- 接口详情 -->
        <el-form-item>
          <p align="left" class="title">接口详情</p>
          <script type="text/plain" id="myEditor2" style="width:100%;height:200px;">
          </script>
        </el-form-item>
        
        <el-form-item label="状态" prop="state">
            <el-checkbox v-model="ruleForm.state"></el-checkbox>
        </el-form-item>
      
        <el-form-item>
          <el-button @click="cancleFun">取 消</el-button>
          <el-button type="primary" @click="ruleFormSubmit">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- dialog-add -->
    <el-dialog title="添加信息" v-model="addDialogFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" :rules="addrules" ref="addForm">
      <!-- 名称 -->
        <el-form-item label="姓名" prop="name">
          <el-radio-group v-model="addForm.name">
            <el-radio  v-for="item in users" :label="item" key="item"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 需求 -->
        <el-form-item label="需求" prop="request">
          <el-input v-model="addForm.request"></el-input>
        </el-form-item>
        <!-- 详情 -->
        <el-form-item>
          <p align="left" class="title">需求详情</p>
          <script type="text/plain" id="myEditor" style="width:100%;height:200px;">
          </script>
        </el-form-item>

        <el-form-item>
          <el-button @click="cancleFun">取 消</el-button>
          <el-button type="primary" @click="addFormSubmit">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
	</div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        lists:[],
        users:[],
        dialogFormVisible:false,
        addDialogFormVisible:false,
        um1:'',
        um2:'',
        um3:'',
        // 编辑
        ruleForm:{
          id:'',
          time:'',
          name:'',
          state:'',
          request:'',
          detailRequest:'',
          response:'',
          detailResponse:'',
        },
        addForm:{
          name:'',
          request:'',
          detailRequest:'',
        },
        formLabelWidth: '120px',
        addrules:{
          name:[
            { required: true, message: '必填字段', trigger: 'blur' },
          ],
          request: [
            { required: true, message: '必填字段', trigger: 'blur' },
          ],
        },
        rules:{
          request: [
            { required: true, message: '必填字段', trigger: 'blur' },
          ],
          response:[
           { required: true, message: '必填字段', trigger: 'blur' },
          ]
        },
      }
    },
    methods: {
      cancleFun() {
        this.dialogFormVisible = false;
        this.addDialogFormVisible = false;
      },
      handleEdit(index, row) {
        for(var i in row){
          this.ruleForm[i] = row[i];
        }
        this.ruleForm['state'] = this.ruleForm['state']==1;
        this.dialogFormVisible = true;
        this.$nextTick(function(){
          this.um2 = UM.getEditor('myEditor1');
          this.um2.setContent(this.ruleForm.detailRequest);

          this.um3 = UM.getEditor('myEditor2');
          this.um3.setContent(this.ruleForm.detailResponse);

        }) 
      },
      // 添加按钮
      addFormSubmit(){
        this.$refs['addForm'].validate((valid) => {
          if (valid) {
            var data = this.$qs.stringify({
              name:this.addForm.name,
              request:this.addForm.request,
              detailRequest:this.um1.getContent(),
            });
            this.$http.post('/hx160803/shareInterface/shareInterface.php?action=addlist',data).then((res)=>{
              var data = res.data;
              if(data==1){
                this.addDialogFormVisible=false;
                this.listsInit();
              }
            }).catch((err)=>{
              console.log(err)
            })
          }
        });
      },
      ruleFormSubmit(){
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.ruleForm.detailRequest = this.um2.getContent();
            this.ruleForm.detailResponse = this.um3.getContent();
            var data = this.$qs.stringify({
              data:window.JSON.stringify(this.ruleForm),
            });
            this.$http.post('/hx160803/shareInterface/shareInterface.php?action=changelist',data).then((res)=>{
              var data = res.data;
              if(data==1){
                this.dialogFormVisible=false;
                this.listsInit();
              }
            }).catch((err)=>{
              console.log(err)
            })
          }
        });
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var data = this.$qs.stringify({
            id:row.id,
          });
          this.$http.post('/hx160803/shareInterface/shareInterface.php?action=deletelist',data).then((res)=>{
              var data = res.data;
              if(data==1){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.listsInit();
              }
            }).catch((err)=>{
              console.log(err)
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleAdd(){ 
        this.addDialogFormVisible = true;
        this.$nextTick(function(){
          this.$refs['addForm'].resetFields();
          this.um1 = UM.getEditor('myEditor');
        })     
      },
      listsInit(){
          this.$http.get('/hx160803/shareInterface/shareInterface.php?action=getlists').then((res)=>{
            this.lists = res.data;
          }).catch((err)=>{
            console.log(err)
          })
      },
      usersInit(){
          this.$http.get('/hx160803/shareInterface/shareInterface.php?action=getUsers').then((res)=>{
            this.users = res.data;
          }).catch((err)=>{
            console.log(err)
          })
      },
      tableRowClassName(row, index) {
        // console.log(row);
        if (row.state == 1) {
          return 'info-row';
        }else{
          return '';
        }
      }
    },
    mounted(){
    this.listsInit();
    this.usersInit();
  },
}
</script>
<style>
.edui-body-container{
  text-align: left;
}
h1{
  color:#58B7FF;
}
.table{
  width: 90% !important;
  margin: auto;
  text-align: center;
}
.info-row{
  background: #7CCD7C!important;
}
.addbtn{
  display: block;
  margin: 0 auto 10px!important;
}
.interface{
  color: #1F2D3D;
}
.title{margin: 0;}
.showcode{
  background: #E5E9F2;
  padding: 12px;
  margin: 12px 0;
  border-radius: 5px;
}
</style>