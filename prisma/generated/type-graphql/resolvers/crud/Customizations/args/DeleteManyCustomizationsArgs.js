"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsWhereInput_1 = require("../../../inputs/CustomizationsWhereInput");
let DeleteManyCustomizationsArgs = class DeleteManyCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereInput_1.CustomizationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereInput_1.CustomizationsWhereInput)
], DeleteManyCustomizationsArgs.prototype, "where", void 0);
DeleteManyCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCustomizationsArgs);
exports.DeleteManyCustomizationsArgs = DeleteManyCustomizationsArgs;
