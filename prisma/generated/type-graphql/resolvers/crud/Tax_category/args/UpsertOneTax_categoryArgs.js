"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryCreateInput_1 = require("../../../inputs/Tax_categoryCreateInput");
const Tax_categoryUpdateInput_1 = require("../../../inputs/Tax_categoryUpdateInput");
const Tax_categoryWhereUniqueInput_1 = require("../../../inputs/Tax_categoryWhereUniqueInput");
let UpsertOneTax_categoryArgs = class UpsertOneTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput)
], UpsertOneTax_categoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryCreateInput_1.Tax_categoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryCreateInput_1.Tax_categoryCreateInput)
], UpsertOneTax_categoryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryUpdateInput_1.Tax_categoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_categoryUpdateInput_1.Tax_categoryUpdateInput)
], UpsertOneTax_categoryArgs.prototype, "update", void 0);
UpsertOneTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTax_categoryArgs);
exports.UpsertOneTax_categoryArgs = UpsertOneTax_categoryArgs;
