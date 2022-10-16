"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentsSumAggregate = class CommentsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentsSumAggregate.prototype, "cust_id", void 0);
CommentsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentsSumAggregate", {
        isAbstract: true
    })
], CommentsSumAggregate);
exports.CommentsSumAggregate = CommentsSumAggregate;
