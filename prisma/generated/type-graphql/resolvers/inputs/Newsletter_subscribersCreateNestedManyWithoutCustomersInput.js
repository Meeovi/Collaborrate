"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersCreateNestedManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateManyCustomersInputEnvelope_1 = require("../inputs/Newsletter_subscribersCreateManyCustomersInputEnvelope");
const Newsletter_subscribersCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateOrConnectWithoutCustomersInput");
const Newsletter_subscribersCreateWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateWithoutCustomersInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../inputs/Newsletter_subscribersWhereUniqueInput");
let Newsletter_subscribersCreateNestedManyWithoutCustomersInput = class Newsletter_subscribersCreateNestedManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersCreateWithoutCustomersInput_1.Newsletter_subscribersCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersCreateNestedManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersCreateOrConnectWithoutCustomersInput_1.Newsletter_subscribersCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersCreateNestedManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateManyCustomersInputEnvelope_1.Newsletter_subscribersCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateManyCustomersInputEnvelope_1.Newsletter_subscribersCreateManyCustomersInputEnvelope)
], Newsletter_subscribersCreateNestedManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersCreateNestedManyWithoutCustomersInput.prototype, "connect", void 0);
Newsletter_subscribersCreateNestedManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersCreateNestedManyWithoutCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersCreateNestedManyWithoutCustomersInput);
exports.Newsletter_subscribersCreateNestedManyWithoutCustomersInput = Newsletter_subscribersCreateNestedManyWithoutCustomersInput;
