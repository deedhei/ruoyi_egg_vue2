<template>
  <div class="app-container">
    <!-- <el-form
      ref="queryForm"
      :model="queryParams"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="字典名称" prop="dictName">
        <el-input
          v-model="queryParams.dictName"
          placeholder="请输入字典名称"
          clearable
          size="small"
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="字典类型" prop="dictType">
        <el-input
          v-model="queryParams.dictType"
          placeholder="请输入字典类型"
          clearable
          size="small"
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select
          @change="handleQuery"
          v-model="queryParams.status"
          placeholder="字典状态"
          clearable
          size="small"
          style="width: 240px"
        >
          <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
          >重置</el-button
        >
      </el-form-item>
    </el-form> -->

    <!-- <el-row :gutter="10">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-has-permi="['system:dictType:add']"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-has-permi="['system:dictType:update']"
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-has-permi="['system:dictType:delete']"
          >删除</el-button
        >
      </el-col>
    </el-row> -->

    <el-table
      v-loading="$store.state.app.loading"
      :data="typeList"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column
        label="bestFrame"
        align="center"
        prop="bestFrame"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="cardInfoInputJson"
        align="center"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.cardInfoInputJson }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="compareErrorCode"
        align="center"
        prop="compareErrorCode"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="compareErrorMsg"
        align="center"
        prop="compareErrorMsg"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="errorCode"
        align="center"
        prop="errorCode"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="errorMsg"
        align="center"
        prop="errorMsg"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="liveData"
        align="center"
        prop="liveData"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="liveErrorCode"
        align="center"
        prop="liveErrorCode"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="liveErrorMsg"
        align="center"
        prop="liveErrorMsg"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="liveVideo"
        align="center"
        prop="liveVideo"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="needChargeResult"
        align="center"
        prop="needChargeResult"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="profileImage"
        align="center"
        prop="profileImage"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="requestId"
        align="center"
        prop="requestId"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="sdkVerificationId"
        align="center"
        prop="sdkVerificationId"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="sim"
        align="center"
        prop="sim"
        :show-overflow-tooltip="true"
      />
      <!-- <el-table-column
        label="状态"
        align="center"
        prop="status"
        :formatter="statusFormat"
      /> -->
      <el-table-column
        label="备注"
        align="center"
        prop="remark"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="200"
      ></el-table-column>
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-has-permi="['system:dictType:update']"
            >修改</el-button
          > -->
          <el-button
            class="delete"
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-has-permi="['system:dictType:delete']"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog
      :title="title"
      :visible.sync="open"
      width="500px"
      append-to-body
      :close-on-click-modal="false"
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="字典名称" prop="dictName">
          <el-input v-model="form.dictName" placeholder="请输入字典名称" />
        </el-form-item>
        <el-form-item label="字典类型" prop="dictType">
          <el-input v-model="form.dictType" placeholder="请输入字典类型" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictValue"
              >{{ dict.dictLabel }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="form.remark"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  listType,
  getType,
  delType,
  addType,
  updateType
} from "@/api/admin/system/dict/type";

import {
  getCompareResultLog,
  delCompareResultLog
} from "@/api/admin/system/log";

export default {
  name: "CardVerifyResultLog",
  data() {
    return {
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 总条数
      total: 0,
      // 字典表格数据
      typeList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 状态数据字典
      statusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        dictName: undefined,
        dictType: undefined,
        status: undefined
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        dictName: [
          { required: true, message: "字典名称不能为空", trigger: "blur" }
        ],
        dictType: [
          { required: true, message: "字典类型不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    getCompareResultLog().then(res => {
      console.log("[Log] getCardVerifyResultLog-->", res);
    });
    this.getList();
    this.getDicts("sys_normal_disable").then(res => {
      this.statusOptions = res.data;
    });
  },
  methods: {
    /** 查询字典类型列表 */
    getList() {
      getCompareResultLog().then(res => {
        this.typeList = res.data.rows;
        this.total = res.data.count;
      });
    },
    // 字典状态字典翻译
    statusFormat(row, column) {
      return this.selectDictLabel(this.statusOptions, row.status);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: undefined,
        dictName: undefined,
        dictType: undefined,
        status: "1",
        remark: undefined
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加字典类型";
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id);
      this.single = selection.length !== 1;
      this.multiple = !selection.length;
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids;
      getType(id).then(res => {
        this.form = res.data;
        this.open = true;
        this.title = "修改字典类型";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.form.id !== undefined) {
            updateType(this.form).then(res => {
              this.$httpResponse(res.message);
              this.open = false;
              this.getList();
            });
          } else {
            addType(this.form).then(res => {
              this.$httpResponse(res.message);
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const Ids = row.id || this.ids;
      this.$confirm('是否确认删除编号为"' + Ids + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(function() {
          return delCompareResultLog(Ids);
        })
        .then(() => {
          this.getList();
          this.$httpResponse("删除成功");
        })
        .catch(function() {});
    }
  }
};
</script>
>
