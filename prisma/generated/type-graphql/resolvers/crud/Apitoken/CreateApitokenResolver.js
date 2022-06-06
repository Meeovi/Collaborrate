"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateApitokenArgs_1 = require("./args/CreateApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let CreateApitokenResolver = class CreateApitokenResolver {
    async createApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateApitokenArgs_1.CreateApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateApitokenResolver.prototype, "createApitoken", null);
CreateApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], CreateApitokenResolver);
exports.CreateApitokenResolver = CreateApitokenResolver;
