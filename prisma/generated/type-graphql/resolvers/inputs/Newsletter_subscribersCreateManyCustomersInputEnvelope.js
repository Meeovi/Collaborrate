"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersCreateManyCustomersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateManyCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateManyCustomersInput");
let Newsletter_subscribersCreateManyCustomersInputEnvelope = class Newsletter_subscribersCreateManyCustomersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersCreateManyCustomersInput_1.Newsletter_subscribersCreateManyCustomersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersCreateManyCustomersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Newsletter_subscribersCreateManyCustomersInputEnvelope.prototype, "skipDuplicates", void 0);
Newsletter_subscribersCreateManyCustomersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersCreateManyCustomersInputEnvelope", {
        isAbstract: true
    })
], Newsletter_subscribersCreateManyCustomersInputEnvelope);
exports.Newsletter_subscribersCreateManyCustomersInputEnvelope = Newsletter_subscribersCreateManyCustomersInputEnvelope;
