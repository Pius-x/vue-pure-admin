<script lang="ts">
export default {
  name: "dept"
};
</script>

<script setup lang="ts">
import dayjs from "dayjs";
import { handleTree } from "/@/utils/tree";
import { getDeptList } from "/@/api/system";
import { FormInstance } from "element-plus";
import { reactive, ref, onMounted } from "vue";
import { EpTableProBar } from "/@/components/ReTable";
import { useRenderIcon } from "/@/components/ReIcon/src/hooks";

const form = reactive({
  user: "",
  status: ""
});
let dataList = ref([]);
let loading = ref(true);

const formRef = ref<FormInstance>();
const tableRef = ref();

function handleUpdate(row) {
  console.log(row);
}

function handleDelete(row) {
  console.log(row);
}

function handleSelectionChange(val) {
  console.log("handleSelectionChange", val);
}

async function onSearch() {
  loading.value = true;
  let { data } = await getDeptList();
  dataList.value = handleTree(data);
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
    <el-form ref="formRef" :inline="true" :model="form" class="bg-white w-99/100 pl-8 pt-4">
      <el-form-item label="部门名称：" prop="user">
        <el-input v-model="form.user" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-select v-model="form.status" placeholder="请选择" clearable>
          <el-option label="开启" value="1" />
          <el-option label="关闭" value="0" />
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
      title="部门列表"
      :loading="loading"
      :tableRef="tableRef"
      :dataList="dataList"
      @refresh="onSearch"
    >
<<<<<<< HEAD
      <div class="flex justify-between w-full h-60px p-4">
        <p class="font-bold">部门列表</p>
        <div class="w-220px flex items-center justify-around">
          <el-button type="primary" :icon="useRenderIcon('add')">新增部门</el-button>
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
              />
            </template>
            <el-checkbox-group v-model="checkList" @change="onCheckChange">
              <el-checkbox label="序号列" />
              <el-checkbox label="勾选列" />
            </el-checkbox-group>
          </el-popover>
        </div>

        <el-tooltip
          ref="tooltipRef"
          v-model:visible="visible"
          :popper-options="{
            modifiers: [
              {
                name: 'computeStyles',
                options: {
                  adaptive: false,
                  enabled: false
                }
              }
            ]
          }"
          placement="top"
          :virtual-ref="buttonRef"
          virtual-triggering
          trigger="click"
          content="列设置"
        />
      </div>
      <el-table
        border
        row-key="id"
        table-layout="auto"
        default-expand-all
        :size="size"
        :data="treeData"
        :header-cell-style="{ background: '#fafafa', color: '#606266' }"
        @selection-change="handleSelectionChange"
      >
        <el-table-column v-if="checkList.includes('勾选列')" type="selection" align="center" width="55" />
        <el-table-column v-if="checkList.includes('序号列')" type="index" align="center" label="序号" width="60" />
        <el-table-column label="部门名称" prop="name" width="180" />
        <el-table-column label="排序" align="center" prop="sort" width="60" />
        <el-table-column label="状态" align="center" prop="status" width="80">
          <template #default="scope">
            <el-tag :type="scope.row.status === 0 ? 'danger' : 'success'" effect="plain">
              {{ scope.row.status === 0 ? "关闭" : "开启" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center" width="180" prop="createTime">
          <template #default="scope">
            <span>{{ dayjs(scope.row.createTime).format("YYYY-MM-DD HH:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column label="备注" align="center" prop="remark" />
        <el-table-column label="操作" align="center" width="130">
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
    </div>
=======
      <template #buttons>
        <el-button type="primary" :icon="useRenderIcon('add')">
          新增部门
        </el-button>
      </template>
      <template v-slot="{ size, checkList }">
        <el-table
          ref="tableRef"
          border
          row-key="id"
          table-layout="auto"
          default-expand-all
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
            align="center"
            label="序号"
            width="60"
          />
          <el-table-column label="部门名称" prop="name" width="180" />
          <el-table-column label="排序" align="center" prop="sort" width="60" />
          <el-table-column label="状态" align="center" prop="status" width="80">
            <template #default="scope">
              <el-tag
                :size="size"
                :type="scope.row.status === 0 ? 'danger' : 'success'"
                effect="plain"
              >
                {{ scope.row.status === 0 ? "关闭" : "开启" }}
              </el-tag>
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
            label="备注"
            align="center"
            prop="remark"
            show-overflow-tooltip
          />
          <el-table-column
            fixed="right"
            label="操作"
            align="center"
            width="140"
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
            </template>
          </el-table-column>
        </el-table>
      </template>
    </EpTableProBar>
>>>>>>> 9271997a30677fb92d809abca9f01160625bcfb8
  </div>
</template>
