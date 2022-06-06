"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateNestedManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateManyCustomersInputEnvelope_1 = require("../inputs/CommentsCreateManyCustomersInputEnvelope");
const CommentsCreateOrConnectWithoutCustomersInput_1 = require("../inputs/CommentsCreateOrConnectWithoutCustomersInput");
const CommentsCreateWithoutCustomersInput_1 = require("../inputs/CommentsCreateWithoutCustomersInput");
const CommentsWhereUniqueInput_1 = require("../inputs/CommentsWhereUniqueInput");
let CommentsCreateNestedManyWithoutCustomersInput = class CommentsCreateNestedManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsCreateWithoutCustomersInput_1.CommentsCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsCreateNestedManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutCustomersInput_1.CommentsCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsCreateNestedManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateManyCustomersInputEnvelope_1.CommentsCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCreateManyCustomersInputEnvelope_1.CommentsCreateManyCustomersInputEnvelope)
], CommentsCreateNestedManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereUniqueInput_1.CommentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsCreateNestedManyWithoutCustomersInput.prototype, "connect", void 0);
CommentsCreateNestedManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsCreateNestedManyWithoutCustomersInput", {
        isAbstract: true
    })
], CommentsCreateNestedManyWithoutCustomersInput);
exports.CommentsCreateNestedManyWithoutCustomersInput = CommentsCreateNestedManyWithoutCustomersInput;
