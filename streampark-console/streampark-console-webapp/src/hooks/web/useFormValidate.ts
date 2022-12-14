/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { computed, ref, unref } from 'vue';
import { FormItem } from '/@/components/Form/src/types/formItem';
export type FormValidateStatus = 'success' | 'warning' | 'error' | 'validating' | '';

export const useFormValidate = () => {
  const validateStatus = ref<FormValidateStatus>('');
  const help = ref('');

  const getValidateStatus = computed(() => {
    return validateStatus.value;
  });
  const setValidateStatus = (status: FormValidateStatus) => {
    validateStatus.value = status;
  };

  const getHelp = computed(() => {
    return help.value;
  });

  const setHelp = (message: string) => {
    help.value = message;
  };
  const getItemProp = computed((): Partial<FormItem> => {
    return { validateStatus: unref(validateStatus), help: unref(help), hasFeedback: true };
  });
  return { getValidateStatus, setValidateStatus, getHelp, setHelp, getItemProp };
};
