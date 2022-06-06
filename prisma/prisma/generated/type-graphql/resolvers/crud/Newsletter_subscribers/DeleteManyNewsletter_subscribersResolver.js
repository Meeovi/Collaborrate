"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyNewsletter_subscribersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyNewsletter_subscribersArgs_1 = require("./args/DeleteManyNewsletter_subscribersArgs");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyNewsletter_subscribersResolver = class DeleteManyNewsletter_subscribersResolver {
    async deleteManyNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyNewsletter_subscribersArgs_1.DeleteManyNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyNewsletter_subscribersResolver.prototype, "deleteManyNewsletter_subscribers", null);
DeleteManyNewsletter_subscribersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], DeleteManyNewsletter_subscribersResolver);
exports.DeleteManyNewsletter_subscribersResolver = DeleteManyNewsletter_subscribersResolver;
