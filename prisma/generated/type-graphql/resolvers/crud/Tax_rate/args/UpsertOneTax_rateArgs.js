"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateInput_1 = require("../../../inputs/Tax_rateCreateInput");
const Tax_rateUpdateInput_1 = require("../../../inputs/Tax_rateUpdateInput");
const Tax_rateWhereUniqueInput_1 = require("../../../inputs/Tax_rateWhereUniqueInput");
let UpsertOneTax_rateArgs = class UpsertOneTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], UpsertOneTax_rateArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateInput_1.Tax_rateCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateInput_1.Tax_rateCreateInput)
], UpsertOneTax_rateArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateUpdateInput_1.Tax_rateUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateUpdateInput_1.Tax_rateUpdateInput)
], UpsertOneTax_rateArgs.prototype, "update", void 0);
UpsertOneTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTax_rateArgs);
exports.UpsertOneTax_rateArgs = UpsertOneTax_rateArgs;
