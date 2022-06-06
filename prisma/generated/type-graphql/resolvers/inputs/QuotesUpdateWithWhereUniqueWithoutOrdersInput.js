"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateWithWhereUniqueWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesUpdateWithoutOrdersInput_1 = require("../inputs/QuotesUpdateWithoutOrdersInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpdateWithWhereUniqueWithoutOrdersInput = class QuotesUpdateWithWhereUniqueWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesUpdateWithWhereUniqueWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateWithoutOrdersInput_1.QuotesUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateWithoutOrdersInput_1.QuotesUpdateWithoutOrdersInput)
], QuotesUpdateWithWhereUniqueWithoutOrdersInput.prototype, "data", void 0);
QuotesUpdateWithWhereUniqueWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateWithWhereUniqueWithoutOrdersInput", {
        isAbstract: true
    })
], QuotesUpdateWithWhereUniqueWithoutOrdersInput);
exports.QuotesUpdateWithWhereUniqueWithoutOrdersInput = QuotesUpdateWithWhereUniqueWithoutOrdersInput;
