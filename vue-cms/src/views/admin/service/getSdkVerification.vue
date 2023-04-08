<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--用户数据-->
      <el-col :span="20" :xs="24">
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
          label-width="68px"
        >
          <el-form-item :required="true" label="Action" prop="action">
            <el-input
              v-model="queryParams.action"
              placeholder="请输入Action"
              clearable
              size="small"
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item :required="true" label="Version" prop="version">
            <el-input
              v-model="queryParams.version"
              placeholder="请输入version"
              clearable
              size="small"
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item
            :required="true"
            label-width="150px"
            label="Region"
            prop="region"
          >
            <el-select
              v-model="queryParams.region"
              placeholder="region"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="dict in sysRegionTypeOptions"
                :key="dict.dictValue"
                :label="dict.dictLabel"
                :value="dict.dictValue"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label-width="100px"
            :required="true"
            label="SdkToken"
            prop="sdkToken"
          >
            <el-input
              v-model="queryParams.sdkToken"
              placeholder="请输入SdkToken"
              clearable
              size="small"
              style="width: 240px"
            />
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
        </el-form>
      </el-col>
    </el-row>
    <el-card v-show="resultData" class="box-card">
      <div>
        {{ resultData }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { getGetsdkverificationresult } from "@/api/admin/system/service.js";
export default {
  name: "User",
  data() {
    return {
      baseUrl: "",
      queryParams: {
        action: "",
        version: "",
        region: "",
        sdkToken: ""
      },
      sysRegionTypeOptions: [],
      resultData: ""
    };
  },
  watch: {},
  created() {
    this.baseUrl = process.env.VUE_APP_BASE_API;
    this.getDicts("sys_Region_Type").then(res => {
      this.sysRegionTypeOptions = res.data;
    });
  },
  methods: {
    /** 搜索按钮操作 */
    handleQuery() {
      if (!this.queryParams.action) {
        this.$message("Action不能为空");
        return;
      }
      if (!this.queryParams.version) {
        this.$message("Version不能为空");
        return;
      }
      if (!this.queryParams.region) {
        this.$message("Region不能为空");
        return;
      }
      if (!this.queryParams.sdkToken) {
        this.$message("SdkToken不能为空");
        return;
      }

      this.getGetsdkverificationresultApi(
        JSON.parse(JSON.stringify(this.queryParams))
      );
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.queryParams = {
        action: "",
        version: "",
        region: "",
        sdkToken: ""
      };
    },
    getGetsdkverificationresultApi(data) {
      data.needVerifyIdCard == "0"
        ? (data.needVerifyIdCard = false)
        : (data.needVerifyIdCard = true);
      getGetsdkverificationresult(data).then(res => {
        if (res.code == 200) {
          this.resultData = JSON.stringify(res.data);
        } else {
          this.resultData = res.message;
        }
      });
    }
  }
};
</script>
