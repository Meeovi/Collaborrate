"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateManyCustomersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateManyCustomersInput_1 = require("../inputs/Credit_memosCreateManyCustomersInput");
let Credit_memosCreateManyCustomersInputEnvelope = class Credit_memosCreateManyCustomersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateManyCustomersInput_1.Credit_memosCreateManyCustomersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateManyCustomersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Credit_memosCreateManyCustomersInputEnvelope.prototype, "skipDuplicates", void 0);
Credit_memosCreateManyCustomersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateManyCustomersInputEnvelope", {
        isAbstract: true
    })
], Credit_memosCreateManyCustomersInputEnvelope);
exports.Credit_memosCreateManyCustomersInputEnvelope = Credit_memosCreateManyCustomersInputEnvelope;
