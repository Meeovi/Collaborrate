"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateManyWithWhereWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesScalarWhereInput_1 = require("../inputs/QuotesScalarWhereInput");
const QuotesUpdateManyMutationInput_1 = require("../inputs/QuotesUpdateManyMutationInput");
let QuotesUpdateManyWithWhereWithoutOrdersInput = class QuotesUpdateManyWithWhereWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesScalarWhereInput_1.QuotesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesScalarWhereInput_1.QuotesScalarWhereInput)
], QuotesUpdateManyWithWhereWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput)
], QuotesUpdateManyWithWhereWithoutOrdersInput.prototype, "data", void 0);
QuotesUpdateManyWithWhereWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateManyWithWhereWithoutOrdersInput", {
        isAbstract: true
    })
], QuotesUpdateManyWithWhereWithoutOrdersInput);
exports.QuotesUpdateManyWithWhereWithoutOrdersInput = QuotesUpdateManyWithWhereWithoutOrdersInput;
