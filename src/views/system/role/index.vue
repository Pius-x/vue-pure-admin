<script lang="ts">
export default {
  name: "role"
};
</script>

<script setup lang="ts">
import dayjs from "dayjs";
import { getRoleList } from "/@/api/system";
import { FormInstance } from "element-plus";
import { ElMessageBox } from "element-plus";
import { reactive, ref, onMounted } from "vue";
import { EpTableProBar } from "/@/components/ReTable";
import { Switch, message } from "@pureadmin/components";
import { useRenderIcon } from "/@/components/ReIcon/src/hooks";

const form = reactive({
  name: "",
  code: "",
  status: ""
});
let dataList = ref([]);
let pageSize = ref(10);
let totalPage = ref(0);
let loading = ref(true);
let switchLoadMap = ref({});

const formRef = ref<FormInstance>();

function handleUpdate(row) {
  console.log(row);
}

function handleDelete(row) {
  console.log(row);
}

function handleCurrentChange(val: number) {
  console.log(`current page: ${val}`);
}

function handleSizeChange(val: number) {
  console.log(`${val} items per page`);
}

function handleSelectionChange(val) {
  console.log("handleSelectionChange", val);
}

function onChange(checked, { $index, row }) {
  ElMessageBox.confirm(
    `确认要<strong>${
      row.status === 0 ? "停用" : "启用"
    }</strong><strong style='color:var(--el-color-primary)'>${
      row.name
    }</strong>角色吗?`,
    "系统提示",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      dangerouslyUseHTMLString: true,
      draggable: true
    }
  )
    .then(() => {
      switchLoadMap.value[$index] = Object.assign({}, switchLoadMap.value[$index], {
        loading: true
      });
      setTimeout(() => {
        switchLoadMap.value[$index] = Object.assign({}, switchLoadMap.value[$index], {
          loading: false
        });
        message.success("已成功修改角色状态");
      }, 300);
    })
    .catch(() => {
      row.status === 0 ? (row.status = 1) : (row.status = 0);
    });
}

async function onSearch() {
  loading.value = true;
  let { data } = await getRoleList();
  dataList.value = data.list;
  totalPage.value = data.total;
  setTimeout(() => {
    loading.value = false;
  }, 500);
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  onSearch();
};

onMounted(() => {
  onSearch();
});
</script>

<template>
  <div class="main">
<<<<<<< HEAD
    <el-form ref="formRef" :inline="true" :model="form" class="bg-white w-99/100 pl-8 pt-4">
      <el-form-item label="角色编码：" prop="code">
        <el-input v-model="form.code" placeholder="请输入" clearable />
=======
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="bg-white w-99/100 pl-8 pt-4"
    >
      <el-form-item label="角色名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入" clearable />
>>>>>>> 9271997a30677fb92d809abca9f01160625bcfb8
      </el-form-item>
      <el-form-item label="角色标识：" prop="code">
        <el-input v-model="form.code" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-select v-model="form.status" placeholder="请选择" clearable>
          <el-option label="已开启" value="1" />
          <el-option label="已关闭" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
<<<<<<< HEAD
        <el-button type="primary" :icon="useRenderIcon('search')" :loading="loading" @click="onSearch"> 搜索</el-button>
        <el-button :icon="useRenderIcon('refresh')" @click="resetForm(formRef)">重置</el-button>
=======
        <el-button
          type="primary"
          :icon="useRenderIcon('search')"
          :loading="loading"
          @click="onSearch"
        >
          搜索
        </el-button>
        <el-button :icon="useRenderIcon('refresh')" @click="resetForm(formRef)">
          重置
        </el-button>
>>>>>>> 9271997a30677fb92d809abca9f01160625bcfb8
      </el-form-item>
    </el-form>

    <EpTableProBar
      title="角色列表"
      :loading="loading"
      :dataList="dataList"
      @refresh="onSearch"
    >
<<<<<<< HEAD
      <div class="flex justify-between w-full h-60px p-4">
        <p class="font-bold">角色列表</p>
        <div class="w-220px flex items-center justify-around">
          <el-button type="primary" :icon="useRenderIcon('add')">新增角色</el-button>
          <!-- <el-button type="success" :icon="useRenderIcon('import')"
            >导入</el-button
          >
          <el-button type="warning" :icon="useRenderIcon('export')"
            >导出</el-button
          > -->
          <el-tooltip effect="dark" content="刷新" placement="top">
            <IconifyIconOffline
              class="cursor-pointer outline-none ml-4"
              icon="refresh-right"
              width="20"
              color="#606266"
              @click="onSearch"
            />
          </el-tooltip>
          <el-divider direction="vertical" />

          <el-tooltip effect="dark" content="密度" placement="top">
            <el-dropdown id="header-translation" trigger="click">
              <IconifyIconOffline class="cursor-pointer outline-none" icon="density" width="20" color="#606266" />
              <template #dropdown>
                <el-dropdown-menu class="translation">
                  <el-dropdown-item :style="getDropdownItemStyle('large')" @click="size = 'large'">
                    松散
                  </el-dropdown-item>
                  <el-dropdown-item :style="getDropdownItemStyle('default')" @click="size = 'default'">
                    默认
                  </el-dropdown-item>
                  <el-dropdown-item :style="getDropdownItemStyle('small')" @click="size = 'small'">
                    紧凑
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-tooltip>
          <el-divider direction="vertical" />

          <el-popover :width="200" trigger="click">
            <template #reference>
              <IconifyIconOffline
                class="cursor-pointer outline-none"
                icon="setting"
                width="20"
                color="#606266"
                @mouseover="e => (buttonRef = e.currentTarget)"
                @mouseenter="visible = true"
                @mouseleave="visible = false"
=======
      <template #buttons>
        <el-button type="primary" :icon="useRenderIcon('add')">
          新增角色
        </el-button>
      </template>
      <template v-slot="{ size, checkList }">
        <el-table
          border
          table-layout="auto"
          :size="size"
          :data="dataList"
          :header-cell-style="{ background: '#fafafa', color: '#606266' }"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            v-if="checkList.includes('勾选列')"
            type="selection"
            align="center"
            width="55"
          />
          <el-table-column
            v-if="checkList.includes('序号列')"
            type="index"
            label="序号"
            align="center"
            width="70"
          />
          <el-table-column label="角色编号" align="center" prop="id" />
          <el-table-column label="角色名称" align="center" prop="name" />
          <el-table-column label="角色标识" align="center" prop="code" />
          <el-table-column label="角色类型" align="center" prop="type">
            <template #default="scope">
              <el-tag
                :size="size"
                :type="scope.row.type === 1 ? 'danger' : ''"
                effect="plain"
              >
                {{ scope.row.type === 1 ? "内置" : "自定义" }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="显示顺序" align="center" prop="sort" />
          <el-table-column
            label="状态"
            align="center"
            width="130"
            prop="status"
          >
            <template #default="scope">
              <Switch
                :size="size === 'small' ? 'small' : 'default'"
                :loading="switchLoadMap[scope.$index]?.loading"
                v-model:checked="scope.row.status"
                :checkedValue="1"
                :unCheckedValue="0"
                checked-children="已开启"
                un-checked-children="已关闭"
                @change="checked => onChange(checked, scope)"
>>>>>>> 9271997a30677fb92d809abca9f01160625bcfb8
              />
            </template>
          </el-table-column>
          <el-table-column
            label="创建时间"
            align="center"
            width="180"
            prop="createTime"
            :formatter="
              ({ createTime }) => {
                return dayjs(createTime).format('YYYY-MM-DD HH:mm:ss');
              }
            "
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="180"
            align="center"
          >
            <template #default="scope">
              <el-button
                class="reset-margin"
                type="text"
                :size="size"
                @click="handleUpdate(scope.row)"
                :icon="useRenderIcon('edits')"
              >
                修改
              </el-button>
              <el-popconfirm title="是否确认删除?">
                <template #reference>
                  <el-button
                    class="reset-margin"
                    type="text"
                    :size="size"
                    :icon="useRenderIcon('delete')"
                    @click="handleDelete(scope.row)"
                  >
                    删除
                  </el-button>
                </template>
              </el-popconfirm>
              <el-dropdown>
                <el-button
                  class="ml-3"
                  type="text"
                  :size="size"
                  @click="handleUpdate(scope.row)"
                  :icon="useRenderIcon('more')"
                />
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <el-button
                        class="reset-margin !h-20px !text-gray-500"
                        type="text"
                        :size="size"
                        :icon="useRenderIcon('menu')"
                      >
                        菜单权限
                      </el-button>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-button
                        class="reset-margin !h-20px !text-gray-500"
                        type="text"
                        :size="size"
                        :icon="useRenderIcon('database')"
                      >
                        数据权限
                      </el-button>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="flex justify-end mt-4"
          :small="size === 'small' ? true : false"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 50]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
<<<<<<< HEAD
      </div>
      <el-table
        border
        table-layout="auto"
        :size="size"
        :data="roleList"
        :header-cell-style="{ background: '#fafafa', color: '#606266' }"
        @selection-change="handleSelectionChange"
      >
        <el-table-column v-if="checkList.includes('勾选列')" type="selection" align="center" width="55" />
        <el-table-column v-if="checkList.includes('序号列')" type="index" label="序号" align="center" width="60" />
        <el-table-column label="角色编号" align="center" prop="id" />
        <el-table-column label="角色编码" align="center" prop="code" />
        <el-table-column label="角色名称" align="center" prop="name" />
        <el-table-column label="角色排序" align="center" prop="sort" />
        <el-table-column label="状态" align="center" prop="status">
          <template #default="scope">
            <Switch
              :size="size === 'small' ? 'small' : 'default'"
              :loading="switchLoadMap[scope.$index]?.loading"
              v-model:checked="scope.row.status"
              :checkedValue="1"
              :unCheckedValue="0"
              checked-children="已开启"
              un-checked-children="已关闭"
              @change="checked => onChange(checked, scope)"
            />
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center" width="180" prop="createTime">
          <template #default="scope">
            <span>{{ dayjs(scope.row.createTime).format("YYYY-MM-DD HH:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="130" align="center">
          <template #default="scope">
            <el-button type="text" @click="handleUpdate(scope.row)">修改</el-button>
            <el-popconfirm title="是否确认删除?">
              <template #reference>
                <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="flex justify-end mt-4"
        :small="size === 'small' ? true : false"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 50]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
=======
      </template>
    </EpTableProBar>
>>>>>>> 9271997a30677fb92d809abca9f01160625bcfb8
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
