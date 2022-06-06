"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCreateManyCustomersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateManyCustomersInput_1 = require("../inputs/EmailsCreateManyCustomersInput");
let EmailsCreateManyCustomersInputEnvelope = class EmailsCreateManyCustomersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsCreateManyCustomersInput_1.EmailsCreateManyCustomersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsCreateManyCustomersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EmailsCreateManyCustomersInputEnvelope.prototype, "skipDuplicates", void 0);
EmailsCreateManyCustomersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsCreateManyCustomersInputEnvelope", {
        isAbstract: true
    })
], EmailsCreateManyCustomersInputEnvelope);
exports.EmailsCreateManyCustomersInputEnvelope = EmailsCreateManyCustomersInputEnvelope;
