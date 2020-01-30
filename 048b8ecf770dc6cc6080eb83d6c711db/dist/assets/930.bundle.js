(window.webpackJsonp=window.webpackJsonp||[]).push([[930],{2027:function(n,e,t){"use strict";t.r(e),e.default="/*\n Fixes a typing issue when using connect inside a HOC component: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31363\n The definition was picked from @types/react-redux@5.0.8\n\n Without this, we get a \"non-assignable type\" with the following detail:\n Argument of type 'FunctionComponent<T & { ... }>' is not assignable to parameter of type 'ComponentType<Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>>'.\n  Type 'FunctionComponent<T & { ... }>' is not assignable to type 'FunctionComponent<Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>>'.\n    Types of property 'propTypes' are incompatible.\n      Type 'WeakValidationMap<T & { ... }>' is not assignable to type 'WeakValidationMap<Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>>'.\n        Type 'null extends (T & { ... })[K] ? Validator<(T & { setIsDirty: (id: string, isDirty: boolean) => { ...; }; })[K]> : undefined extends (T & { ...; })[K] ? Validator<...> : Validator<...>' is not assignable to type 'null extends Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>[K] ? Validator<...> : undefined extends Matching<...>[K] ? Validator<...> :...'.ts(2345)\n*/\nimport {ComponentClass, ComponentType} from 'react';\n\nexport type InferableComponentEnhancer<TInjectedProps> = InferableComponentEnhancerWithProps<TInjectedProps, {}>;\n\nexport interface InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> {\n    <P extends TInjectedProps>(component: ComponentType<P>): ComponentClass<\n        Omit<P, keyof TInjectedProps> & TNeedsProps\n    > & {WrappedComponent: Component<P>};\n}\n"}}]);
//# sourceMappingURL=930.bundle.js.map