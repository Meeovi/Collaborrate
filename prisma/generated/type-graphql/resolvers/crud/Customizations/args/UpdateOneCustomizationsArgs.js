"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsUpdateInput_1 = require("../../../inputs/CustomizationsUpdateInput");
const CustomizationsWhereUniqueInput_1 = require("../../../inputs/CustomizationsWhereUniqueInput");
let UpdateOneCustomizationsArgs = class UpdateOneCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsUpdateInput_1.CustomizationsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsUpdateInput_1.CustomizationsUpdateInput)
], UpdateOneCustomizationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput)
], UpdateOneCustomizationsArgs.prototype, "where", void 0);
UpdateOneCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCustomizationsArgs);
exports.UpdateOneCustomizationsArgs = UpdateOneCustomizationsArgs;
