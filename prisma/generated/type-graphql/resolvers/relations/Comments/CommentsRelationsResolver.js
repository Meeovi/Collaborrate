"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comments_1 = require("../../../models/Comments");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let CommentsRelationsResolver = class CommentsRelationsResolver {
    async customers(comments, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.findUnique({
            where: {
                id: comments.id,
            },
        }).customers({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comments_1.Comments, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsRelationsResolver.prototype, "customers", null);
CommentsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], CommentsRelationsResolver);
exports.CommentsRelationsResolver = CommentsRelationsResolver;
