"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MediamanagerSumAggregate = class MediamanagerSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MediamanagerSumAggregate.prototype, "id", void 0);
MediamanagerSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MediamanagerSumAggregate", {
        isAbstract: true
    })
], MediamanagerSumAggregate);
exports.MediamanagerSumAggregate = MediamanagerSumAggregate;
