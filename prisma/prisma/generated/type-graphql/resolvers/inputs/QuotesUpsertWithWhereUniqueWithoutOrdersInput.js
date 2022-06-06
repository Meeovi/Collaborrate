"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpsertWithWhereUniqueWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateWithoutOrdersInput_1 = require("../inputs/QuotesCreateWithoutOrdersInput");
const QuotesUpdateWithoutOrdersInput_1 = require("../inputs/QuotesUpdateWithoutOrdersInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpsertWithWhereUniqueWithoutOrdersInput = class QuotesUpsertWithWhereUniqueWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesUpsertWithWhereUniqueWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateWithoutOrdersInput_1.QuotesUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateWithoutOrdersInput_1.QuotesUpdateWithoutOrdersInput)
], QuotesUpsertWithWhereUniqueWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateWithoutOrdersInput_1.QuotesCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateWithoutOrdersInput_1.QuotesCreateWithoutOrdersInput)
], QuotesUpsertWithWhereUniqueWithoutOrdersInput.prototype, "create", void 0);
QuotesUpsertWithWhereUniqueWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpsertWithWhereUniqueWithoutOrdersInput", {
        isAbstract: true
    })
], QuotesUpsertWithWhereUniqueWithoutOrdersInput);
exports.QuotesUpsertWithWhereUniqueWithoutOrdersInput = QuotesUpsertWithWhereUniqueWithoutOrdersInput;
