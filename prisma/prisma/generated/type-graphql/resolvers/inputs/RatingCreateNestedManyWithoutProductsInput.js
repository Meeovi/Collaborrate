"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateManyProductsInputEnvelope_1 = require("../inputs/RatingCreateManyProductsInputEnvelope");
const RatingCreateOrConnectWithoutProductsInput_1 = require("../inputs/RatingCreateOrConnectWithoutProductsInput");
const RatingCreateWithoutProductsInput_1 = require("../inputs/RatingCreateWithoutProductsInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingCreateNestedManyWithoutProductsInput = class RatingCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingCreateWithoutProductsInput_1.RatingCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutProductsInput_1.RatingCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateManyProductsInputEnvelope_1.RatingCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateManyProductsInputEnvelope_1.RatingCreateManyProductsInputEnvelope)
], RatingCreateNestedManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereUniqueInput_1.RatingWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
RatingCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], RatingCreateNestedManyWithoutProductsInput);
exports.RatingCreateNestedManyWithoutProductsInput = RatingCreateNestedManyWithoutProductsInput;
