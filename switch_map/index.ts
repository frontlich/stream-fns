declare type ConvertReturned<F, V> = (next: <R>(v: V) => void | R, error?: (err: any) => any) => F;

export function switchMap<R>(convert: () => Promise<R>): ConvertReturned<() => void, R>;
export function switchMap<T, R>(convert: (arg: T) => Promise<R>): ConvertReturned<(arg: T) => void, R>;
export function switchMap<T1, T2, R>(convert: (arg1: T1, arg2: T2) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2) => void, R>;
export function switchMap<T1, T2, T3, R>(convert: (arg1: T1, arg2: T2, arg3: T3) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3) => void, R>;
export function switchMap<T1, T2, T3, T4, R>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void, R>;
export function switchMap<T1, T2, T3, T4, T5, R>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void, R>;
export function switchMap<T1, T2, T3, T4, T5, T6, R>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void, R>;
export function switchMap<T1, T2, T3, T4, T5, T6, T7, R>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void, R>;
export function switchMap<T1, T2, T3, T4, T5, T6, T7, T8, R>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void, R>;
export function switchMap<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => void, R>;
export function switchMap<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(convert: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => Promise<R>): ConvertReturned<(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => void, R>;
export function switchMap<R>(convert: (...argus: any[]) => Promise<R>) {

  return (next: <S>(v: R) => S, error?: (err: any) => any) => {

    let times = 0;

    return (...args: any[]) => {

      let currentTime = times++;

      convert(...args).then((res) => {

        if (times === currentTime) {
          next(res);
        }

      }).catch(error);

    }
  }

}
