"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCommentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCommentsArgs_1 = require("./args/AggregateCommentsArgs");
const Comments_1 = require("../../../models/Comments");
const AggregateComments_1 = require("../../outputs/AggregateComments");
const helpers_1 = require("../../../helpers");
let AggregateCommentsResolver = class AggregateCommentsResolver {
    async aggregateComments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateComments_1.AggregateComments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCommentsArgs_1.AggregateCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCommentsResolver.prototype, "aggregateComments", null);
AggregateCommentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], AggregateCommentsResolver);
exports.AggregateCommentsResolver = AggregateCommentsResolver;
