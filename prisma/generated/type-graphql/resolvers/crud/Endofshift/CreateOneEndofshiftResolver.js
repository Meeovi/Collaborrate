"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneEndofshiftArgs_1 = require("./args/CreateOneEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const helpers_1 = require("../../../helpers");
let CreateOneEndofshiftResolver = class CreateOneEndofshiftResolver {
    async createOneEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Endofshift_1.Endofshift, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEndofshiftArgs_1.CreateOneEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneEndofshiftResolver.prototype, "createOneEndofshift", null);
CreateOneEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], CreateOneEndofshiftResolver);
exports.CreateOneEndofshiftResolver = CreateOneEndofshiftResolver;
