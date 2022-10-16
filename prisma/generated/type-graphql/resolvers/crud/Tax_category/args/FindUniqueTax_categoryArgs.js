"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryWhereUniqueInput_1 = require("../../../inputs/Tax_categoryWhereUniqueInput");
let FindUniqueTax_categoryArgs = class FindUniqueTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput)
], FindUniqueTax_categoryArgs.prototype, "where", void 0);
FindUniqueTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTax_categoryArgs);
exports.FindUniqueTax_categoryArgs = FindUniqueTax_categoryArgs;
