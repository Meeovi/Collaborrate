"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyNewsletter_subscribersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyNewsletter_subscribersArgs_1 = require("./args/UpdateManyNewsletter_subscribersArgs");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyNewsletter_subscribersResolver = class UpdateManyNewsletter_subscribersResolver {
    async updateManyNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyNewsletter_subscribersArgs_1.UpdateManyNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyNewsletter_subscribersResolver.prototype, "updateManyNewsletter_subscribers", null);
UpdateManyNewsletter_subscribersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], UpdateManyNewsletter_subscribersResolver);
exports.UpdateManyNewsletter_subscribersResolver = UpdateManyNewsletter_subscribersResolver;
