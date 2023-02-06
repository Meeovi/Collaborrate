import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
declare const crudResolversMap: {
    Apitoken: typeof crudResolvers.ApitokenCrudResolver;
    Payments: typeof crudResolvers.PaymentsCrudResolver;
    Templates: typeof crudResolvers.TemplatesCrudResolver;
    Emails: typeof crudResolvers.EmailsCrudResolver;
    Taxes: typeof crudResolvers.TaxesCrudResolver;
    Categories: typeof crudResolvers.CategoriesCrudResolver;
    Customers: typeof crudResolvers.CustomersCrudResolver;
    Integrations: typeof crudResolvers.IntegrationsCrudResolver;
    Internalization: typeof crudResolvers.InternalizationCrudResolver;
    Mediamanager: typeof crudResolvers.MediamanagerCrudResolver;
    Permissions: typeof crudResolvers.PermissionsCrudResolver;
    Plugins: typeof crudResolvers.PluginsCrudResolver;
    Providers: typeof crudResolvers.ProvidersCrudResolver;
    Roles: typeof crudResolvers.RolesCrudResolver;
    Tags: typeof crudResolvers.TagsCrudResolver;
    Users: typeof crudResolvers.UsersCrudResolver;
    Webhooks: typeof crudResolvers.WebhooksCrudResolver;
    Settings: typeof crudResolvers.SettingsCrudResolver;
};
type ResolverModelNames = keyof typeof crudResolversMap;
type ModelResolverActionNames<TModel extends ResolverModelNames> = keyof typeof crudResolversMap[TModel]["prototype"];
export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;
export type ResolversEnhanceMap = {
    [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};
export declare function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap): void;
type ArgsTypesNames = keyof typeof argsTypes;
type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<keyof typeof argsTypes[TArgsType]["prototype"], number | symbol>;
type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<ArgFieldNames<TArgsType>>;
export type ArgConfig<TArgsType extends ArgsTypesNames> = {
    class?: ClassDecorator[];
    fields?: ArgFieldsConfig<TArgsType>;
};
export type ArgsTypesEnhanceMap = {
    [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};
export declare function applyArgsTypesEnhanceMap(argsTypesEnhanceMap: ArgsTypesEnhanceMap): void;
type FieldsConfig<TTypeKeys extends string = string> = Partial<Record<TTypeKeys | "_all", PropertyDecorator[]>>;
type ModelNames = keyof typeof models;
type ModelFieldNames<TModel extends ModelNames> = Exclude<keyof typeof models[TModel]["prototype"], number | symbol>;
type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<ModelFieldNames<TModel>>;
export type ModelConfig<TModel extends ModelNames> = {
    class?: ClassDecorator[];
    fields?: ModelFieldsConfig<TModel>;
};
export type ModelsEnhanceMap = {
    [TModel in ModelNames]?: ModelConfig<TModel>;
};
export declare function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap): void;
type OutputTypesNames = keyof typeof outputTypes;
type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<keyof typeof outputTypes[TOutput]["prototype"], number | symbol>;
type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<OutputTypeFieldNames<TOutput>>;
export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
    class?: ClassDecorator[];
    fields?: OutputTypeFieldsConfig<TOutput>;
};
export type OutputTypesEnhanceMap = {
    [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};
export declare function applyOutputTypesEnhanceMap(outputTypesEnhanceMap: OutputTypesEnhanceMap): void;
type InputTypesNames = keyof typeof inputTypes;
type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<keyof typeof inputTypes[TInput]["prototype"], number | symbol>;
type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<InputTypeFieldNames<TInput>>;
export type InputTypeConfig<TInput extends InputTypesNames> = {
    class?: ClassDecorator[];
    fields?: InputTypeFieldsConfig<TInput>;
};
export type InputTypesEnhanceMap = {
    [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};
export declare function applyInputTypesEnhanceMap(inputTypesEnhanceMap: InputTypesEnhanceMap): void;
export {};
