"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsUpdateManyMutationInput_1 = require("../../../inputs/CustomizationsUpdateManyMutationInput");
const CustomizationsWhereInput_1 = require("../../../inputs/CustomizationsWhereInput");
let UpdateManyCustomizationsArgs = class UpdateManyCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsUpdateManyMutationInput_1.CustomizationsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsUpdateManyMutationInput_1.CustomizationsUpdateManyMutationInput)
], UpdateManyCustomizationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereInput_1.CustomizationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereInput_1.CustomizationsWhereInput)
], UpdateManyCustomizationsArgs.prototype, "where", void 0);
UpdateManyCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCustomizationsArgs);
exports.UpdateManyCustomizationsArgs = UpdateManyCustomizationsArgs;
