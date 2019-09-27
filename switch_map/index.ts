import { Operator } from '../type';

export default function switchMap<V>(convert: () => Promise<V>): Operator<(v: V) => any, () => void>;
export default function switchMap<T, V>(convert: (arg: T) => Promise<V>): Operator<(v: V) => any, (arg: T) => void>;
export default function switchMap<T1, T2, V>(convert: (arg1: T1, arg2: T2) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2) => void>;
export default function switchMap<T1, T2, T3, V>(convert: (arg1: T1, arg2: T2, arg3: T3) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3) => void>;
export default function switchMap<T1, T2, T3, T4, V>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void>;
export default function switchMap<T1, T2, T3, T4, T5, V>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void>;
export default function switchMap<T1, T2, T3, T4, T5, T6, V>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void>;
export default function switchMap<T1, T2, T3, T4, T5, T6, T7, V>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void>;
export default function switchMap<T1, T2, T3, T4, T5, T6, T7, T8, V>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void>;
export default function switchMap<T1, T2, T3, T4, T5, T6, T7, T8, T9, V>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => void>;
export default function switchMap<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, V>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => Promise<V>): Operator<(v: V) => any, (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => void>;
export default function switchMap<V>(convert: (...argus: any[]) => Promise<V>) {

  return (next: <S>(v: V) => S, error?: (err: any) => any) => {

    let times = 0;

    return (...args: any[]) => {

      let currentTime = ++times;

      convert(...args).then((res) => {

        if (times === currentTime) {
          next(res);
        }

      }).catch(error);

    }
  }

}
