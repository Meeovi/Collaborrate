"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateWithoutCustomersInput");
const Newsletter_subscribersUpdateWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpdateWithoutCustomersInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../inputs/Newsletter_subscribersWhereUniqueInput");
let Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput = class Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateWithoutCustomersInput_1.Newsletter_subscribersUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateWithoutCustomersInput_1.Newsletter_subscribersUpdateWithoutCustomersInput)
], Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateWithoutCustomersInput_1.Newsletter_subscribersCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateWithoutCustomersInput_1.Newsletter_subscribersCreateWithoutCustomersInput)
], Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput.prototype, "create", void 0);
Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput);
exports.Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput = Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput;
