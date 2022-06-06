"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateManyCustomersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateManyCustomersInput_1 = require("../inputs/ReturnsCreateManyCustomersInput");
let ReturnsCreateManyCustomersInputEnvelope = class ReturnsCreateManyCustomersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateManyCustomersInput_1.ReturnsCreateManyCustomersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateManyCustomersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReturnsCreateManyCustomersInputEnvelope.prototype, "skipDuplicates", void 0);
ReturnsCreateManyCustomersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateManyCustomersInputEnvelope", {
        isAbstract: true
    })
], ReturnsCreateManyCustomersInputEnvelope);
exports.ReturnsCreateManyCustomersInputEnvelope = ReturnsCreateManyCustomersInputEnvelope;
