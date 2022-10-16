"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsWhereUniqueInput_1 = require("../../../inputs/CustomizationsWhereUniqueInput");
let FindUniqueCustomizationsArgs = class FindUniqueCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput)
], FindUniqueCustomizationsArgs.prototype, "where", void 0);
FindUniqueCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCustomizationsArgs);
exports.FindUniqueCustomizationsArgs = FindUniqueCustomizationsArgs;
