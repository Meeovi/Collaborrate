"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsWhereUniqueInput_1 = require("../../../inputs/CustomizationsWhereUniqueInput");
let DeleteOneCustomizationsArgs = class DeleteOneCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput)
], DeleteOneCustomizationsArgs.prototype, "where", void 0);
DeleteOneCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCustomizationsArgs);
exports.DeleteOneCustomizationsArgs = DeleteOneCustomizationsArgs;
