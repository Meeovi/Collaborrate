"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsUpdateWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsUpdateWithoutCustomersInput_1 = require("../inputs/EmailsUpdateWithoutCustomersInput");
const EmailsWhereUniqueInput_1 = require("../inputs/EmailsWhereUniqueInput");
let EmailsUpdateWithWhereUniqueWithoutCustomersInput = class EmailsUpdateWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], EmailsUpdateWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateWithoutCustomersInput_1.EmailsUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsUpdateWithoutCustomersInput_1.EmailsUpdateWithoutCustomersInput)
], EmailsUpdateWithWhereUniqueWithoutCustomersInput.prototype, "data", void 0);
EmailsUpdateWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsUpdateWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], EmailsUpdateWithWhereUniqueWithoutCustomersInput);
exports.EmailsUpdateWithWhereUniqueWithoutCustomersInput = EmailsUpdateWithWhereUniqueWithoutCustomersInput;
