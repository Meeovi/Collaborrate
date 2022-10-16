"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryUpdateManyMutationInput_1 = require("../../../inputs/Tax_categoryUpdateManyMutationInput");
const Tax_categoryWhereInput_1 = require("../../../inputs/Tax_categoryWhereInput");
let UpdateManyTax_categoryArgs = class UpdateManyTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryUpdateManyMutationInput_1.Tax_categoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryUpdateManyMutationInput_1.Tax_categoryUpdateManyMutationInput)
], UpdateManyTax_categoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereInput_1.Tax_categoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereInput_1.Tax_categoryWhereInput)
], UpdateManyTax_categoryArgs.prototype, "where", void 0);
UpdateManyTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTax_categoryArgs);
exports.UpdateManyTax_categoryArgs = UpdateManyTax_categoryArgs;
