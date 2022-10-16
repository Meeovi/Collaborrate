"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryUpdateInput_1 = require("../../../inputs/Tax_categoryUpdateInput");
const Tax_categoryWhereUniqueInput_1 = require("../../../inputs/Tax_categoryWhereUniqueInput");
let UpdateOneTax_categoryArgs = class UpdateOneTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryUpdateInput_1.Tax_categoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryUpdateInput_1.Tax_categoryUpdateInput)
], UpdateOneTax_categoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput)
], UpdateOneTax_categoryArgs.prototype, "where", void 0);
UpdateOneTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTax_categoryArgs);
exports.UpdateOneTax_categoryArgs = UpdateOneTax_categoryArgs;
