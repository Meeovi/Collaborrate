"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyNewsletter_subscribersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyNewsletter_subscribersArgs_1 = require("./args/CreateManyNewsletter_subscribersArgs");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyNewsletter_subscribersResolver = class CreateManyNewsletter_subscribersResolver {
    async createManyNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyNewsletter_subscribersArgs_1.CreateManyNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyNewsletter_subscribersResolver.prototype, "createManyNewsletter_subscribers", null);
CreateManyNewsletter_subscribersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], CreateManyNewsletter_subscribersResolver);
exports.CreateManyNewsletter_subscribersResolver = CreateManyNewsletter_subscribersResolver;
