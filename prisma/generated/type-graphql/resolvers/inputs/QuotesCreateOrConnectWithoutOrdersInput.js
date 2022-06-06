"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateWithoutOrdersInput_1 = require("../inputs/QuotesCreateWithoutOrdersInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesCreateOrConnectWithoutOrdersInput = class QuotesCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateWithoutOrdersInput_1.QuotesCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateWithoutOrdersInput_1.QuotesCreateWithoutOrdersInput)
], QuotesCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
QuotesCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], QuotesCreateOrConnectWithoutOrdersInput);
exports.QuotesCreateOrConnectWithoutOrdersInput = QuotesCreateOrConnectWithoutOrdersInput;
