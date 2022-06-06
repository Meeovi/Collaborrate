"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsUpsertWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateWithoutCustomersInput_1 = require("../inputs/EmailsCreateWithoutCustomersInput");
const EmailsUpdateWithoutCustomersInput_1 = require("../inputs/EmailsUpdateWithoutCustomersInput");
const EmailsWhereUniqueInput_1 = require("../inputs/EmailsWhereUniqueInput");
let EmailsUpsertWithWhereUniqueWithoutCustomersInput = class EmailsUpsertWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], EmailsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateWithoutCustomersInput_1.EmailsUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsUpdateWithoutCustomersInput_1.EmailsUpdateWithoutCustomersInput)
], EmailsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateWithoutCustomersInput_1.EmailsCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsCreateWithoutCustomersInput_1.EmailsCreateWithoutCustomersInput)
], EmailsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "create", void 0);
EmailsUpsertWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsUpsertWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], EmailsUpsertWithWhereUniqueWithoutCustomersInput);
exports.EmailsUpsertWithWhereUniqueWithoutCustomersInput = EmailsUpsertWithWhereUniqueWithoutCustomersInput;
