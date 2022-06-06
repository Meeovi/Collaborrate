"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateApitokenArgs_1 = require("./args/UpdateApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let UpdateApitokenResolver = class UpdateApitokenResolver {
    async updateApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateApitokenArgs_1.UpdateApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateApitokenResolver.prototype, "updateApitoken", null);
UpdateApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], UpdateApitokenResolver);
exports.UpdateApitokenResolver = UpdateApitokenResolver;
