<template>
  <div :class="classList" :vstyle="props.vstyle" :size="props.size" ref="root" :error="props.error">
    <div v-show="!isUpload" class="upload">
      <p>{{ msg }}</p>
      <label :for="fileSymbol" :disabled="props.disabled">Browse files</label>
    </div>
    <div v-show="isUpload" class="uploading">
      <div class="loadingBar" ref="loadingBar"></div>
      <p>Uploading... {{ Progress }}% of 100%</p>
      <button @click="cancelUpload">Cancel</button>
    </div>
  </div>
  <input
    type="file"
    name="v-upload"
    :id="fileSymbol"
    @change="handlerChange"
    ref="file"
    :multiple="props.multiple"
    :maxSize="props.maxSize"
    :minSize="props.minSize"
    :accept="props.accept"
    :disabled="props.disabled"
  />
</template>

<script lang="ts" setup name="v-upload">
import './upload.scss';
import { ref, computed } from 'vue';
import { uploadProps } from './props';
import { uuid } from 'vue-uuid';
//接受传参
const props = defineProps(uploadProps);
//是否显示上传页面
const isUpload = ref(false);
//上传进度
const Progress = ref(0);
//定义类名
const classList = computed(() => {
  return [
    {
      ['v-upload']: 'v-upload',
      //后期加入自定义展示是否显示错误信息
      ['v-error']: props.error,
    },
  ];
});
//定义文件信息
const msg = ref('Drop files here to upload...');
//定义是否取消
const isCancel = ref(false);
//定义每一个组件的随机ID
const fileSymbol = uuid.v4();
//标签$ref
const loadingBar = ref();
const file = ref();
const root = ref();

interface fileEvent extends EventInit {
  target: {
    files: {
      [index: number]: {
        name: string;
        size: string;
      };
      length: number;
    };
  };
}
//定义上传事件
const handlerChange = (e: fileEvent): void => {
  //展示上传界面
  isUpload.value = true;
  //重制本来样式
  root.value.attributes.error.value = 'false';
  //定义延时上传文件
  let timer = setInterval(() => {
    if (isCancel.value) {
      file.value = null;
      msg.value = 'Drop files here to upload...';
      Progress.value = 0;
      clearInterval(timer);
      isCancel.value = false;
    }
    Progress.value += 1;
    if (Progress.value > 100) {
      clearInterval(timer);
      Progress.value = 0;
      msg.value = '';
      //上传文件的大小数组
      let fileSizeArr = [];
      for (let i = 0; i < e.target.files.length; i++) {
        fileSizeArr.push(Number(e.target.files[i].size));
        if (i === e.target.files.length - 1) {
          msg.value += e.target.files[i].name;
          break;
        }
        msg.value += e.target.files[i].name + ' , ';
      }
      if (
        fileSize(fileSizeArr, Number(file.value.attributes.maxsize.value), Number(file.value.attributes.minsize.value))
      ) {
        //超过规定文件大小展示样式
        file.value = null;
        msg.value = 'error: The file upload size beyond/below the limit';
        root.value.attributes.error.value = 'true';
      }
      isUpload.value = false;
    }
  }, 50);
};
//取消上传事件
const cancelUpload = (): void => {
  isCancel.value = true;
  isUpload.value = !isUpload.value;
};
//文件大小判断
const fileSize = (files: number[], maxsize: number, minsize: number): boolean => {
  if (files.reduce((acc, cur) => cur + acc) > maxsize || files.reduce((acc, cur) => cur + acc) < minsize) return true;
  return false;
};
</script>

<style scoped></style>
