"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesScalarWhereInput_1 = require("../inputs/QuotesScalarWhereInput");
const QuotesUpdateManyMutationInput_1 = require("../inputs/QuotesUpdateManyMutationInput");
let QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput = class QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesScalarWhereInput_1.QuotesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesScalarWhereInput_1.QuotesScalarWhereInput)
], QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput)
], QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput.prototype, "data", void 0);
QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput", {
        isAbstract: true
    })
], QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput);
exports.QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput = QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput;
