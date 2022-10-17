"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsCreateInput_1 = require("../../../inputs/CustomizationsCreateInput");
const CustomizationsUpdateInput_1 = require("../../../inputs/CustomizationsUpdateInput");
const CustomizationsWhereUniqueInput_1 = require("../../../inputs/CustomizationsWhereUniqueInput");
let UpsertOneCustomizationsArgs = class UpsertOneCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput)
], UpsertOneCustomizationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsCreateInput_1.CustomizationsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsCreateInput_1.CustomizationsCreateInput)
], UpsertOneCustomizationsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsUpdateInput_1.CustomizationsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsUpdateInput_1.CustomizationsUpdateInput)
], UpsertOneCustomizationsArgs.prototype, "update", void 0);
UpsertOneCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCustomizationsArgs);
exports.UpsertOneCustomizationsArgs = UpsertOneCustomizationsArgs;
