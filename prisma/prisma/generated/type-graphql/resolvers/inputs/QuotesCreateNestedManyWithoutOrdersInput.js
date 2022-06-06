"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateNestedManyWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyOrdersInputEnvelope_1 = require("../inputs/QuotesCreateManyOrdersInputEnvelope");
const QuotesCreateOrConnectWithoutOrdersInput_1 = require("../inputs/QuotesCreateOrConnectWithoutOrdersInput");
const QuotesCreateWithoutOrdersInput_1 = require("../inputs/QuotesCreateWithoutOrdersInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesCreateNestedManyWithoutOrdersInput = class QuotesCreateNestedManyWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateWithoutOrdersInput_1.QuotesCreateWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutOrdersInput_1.QuotesCreateOrConnectWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateManyOrdersInputEnvelope_1.QuotesCreateManyOrdersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateManyOrdersInputEnvelope_1.QuotesCreateManyOrdersInputEnvelope)
], QuotesCreateNestedManyWithoutOrdersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutOrdersInput.prototype, "connect", void 0);
QuotesCreateNestedManyWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateNestedManyWithoutOrdersInput", {
        isAbstract: true
    })
], QuotesCreateNestedManyWithoutOrdersInput);
exports.QuotesCreateNestedManyWithoutOrdersInput = QuotesCreateNestedManyWithoutOrdersInput;
