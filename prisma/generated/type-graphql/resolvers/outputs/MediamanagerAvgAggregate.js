"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MediamanagerAvgAggregate = class MediamanagerAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MediamanagerAvgAggregate.prototype, "id", void 0);
MediamanagerAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MediamanagerAvgAggregate", {
        isAbstract: true
    })
], MediamanagerAvgAggregate);
exports.MediamanagerAvgAggregate = MediamanagerAvgAggregate;
