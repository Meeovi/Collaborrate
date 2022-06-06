"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsUpdateManyWithWhereWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsScalarWhereInput_1 = require("../inputs/EmailsScalarWhereInput");
const EmailsUpdateManyMutationInput_1 = require("../inputs/EmailsUpdateManyMutationInput");
let EmailsUpdateManyWithWhereWithoutCustomersInput = class EmailsUpdateManyWithWhereWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsScalarWhereInput_1.EmailsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsScalarWhereInput_1.EmailsScalarWhereInput)
], EmailsUpdateManyWithWhereWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateManyMutationInput_1.EmailsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsUpdateManyMutationInput_1.EmailsUpdateManyMutationInput)
], EmailsUpdateManyWithWhereWithoutCustomersInput.prototype, "data", void 0);
EmailsUpdateManyWithWhereWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsUpdateManyWithWhereWithoutCustomersInput", {
        isAbstract: true
    })
], EmailsUpdateManyWithWhereWithoutCustomersInput);
exports.EmailsUpdateManyWithWhereWithoutCustomersInput = EmailsUpdateManyWithWhereWithoutCustomersInput;
