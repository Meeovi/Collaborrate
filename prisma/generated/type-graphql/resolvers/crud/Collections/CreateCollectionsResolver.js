"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateCollectionsArgs_1 = require("./args/CreateCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const helpers_1 = require("../../../helpers");
let CreateCollectionsResolver = class CreateCollectionsResolver {
    async createCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCollectionsArgs_1.CreateCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateCollectionsResolver.prototype, "createCollections", null);
CreateCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], CreateCollectionsResolver);
exports.CreateCollectionsResolver = CreateCollectionsResolver;
