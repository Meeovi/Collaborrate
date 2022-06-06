"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateManyCustomersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateManyCustomersInput_1 = require("../inputs/CommentsCreateManyCustomersInput");
let CommentsCreateManyCustomersInputEnvelope = class CommentsCreateManyCustomersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsCreateManyCustomersInput_1.CommentsCreateManyCustomersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsCreateManyCustomersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentsCreateManyCustomersInputEnvelope.prototype, "skipDuplicates", void 0);
CommentsCreateManyCustomersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsCreateManyCustomersInputEnvelope", {
        isAbstract: true
    })
], CommentsCreateManyCustomersInputEnvelope);
exports.CommentsCreateManyCustomersInputEnvelope = CommentsCreateManyCustomersInputEnvelope;
