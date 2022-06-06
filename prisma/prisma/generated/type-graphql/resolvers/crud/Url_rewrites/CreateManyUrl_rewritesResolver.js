"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyUrl_rewritesArgs_1 = require("./args/CreateManyUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyUrl_rewritesResolver = class CreateManyUrl_rewritesResolver {
    async createManyUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUrl_rewritesArgs_1.CreateManyUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyUrl_rewritesResolver.prototype, "createManyUrl_rewrites", null);
CreateManyUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], CreateManyUrl_rewritesResolver);
exports.CreateManyUrl_rewritesResolver = CreateManyUrl_rewritesResolver;
