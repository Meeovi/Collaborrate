"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryWhereInput_1 = require("../../../inputs/Tax_categoryWhereInput");
let DeleteManyTax_categoryArgs = class DeleteManyTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereInput_1.Tax_categoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereInput_1.Tax_categoryWhereInput)
], DeleteManyTax_categoryArgs.prototype, "where", void 0);
DeleteManyTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTax_categoryArgs);
exports.DeleteManyTax_categoryArgs = DeleteManyTax_categoryArgs;
